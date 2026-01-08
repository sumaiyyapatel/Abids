import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '@/firebase';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';
import { Textarea } from '@/components/UI/textarea';
import { toast } from 'sonner';
import { LogOut, Plus, Trash2, Edit, Upload, X } from 'lucide-react';
import styles from './Admin.module.css';

const Admin = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  // Data states
  const [products, setProducts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [categories, setCategories] = useState([]);

  // Form states
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        loadData();
      }
    });
    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    try {
      // Load products
      const productsSnap = await getDocs(collection(db, 'products'));
      setProducts(productsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load projects
      const projectsSnap = await getDocs(collection(db, 'projects'));
      setProjects(projectsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load testimonials
      const testimonialsSnap = await getDocs(collection(db, 'testimonials'));
      setTestimonials(testimonialsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Load categories
      const categoriesSnap = await getDocs(collection(db, 'categories'));
      setCategories(categoriesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      toast.error(t('Failed to load data: ') + error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success(t('Logged in successfully'));
    } catch (error) {
      toast.error(t('Login failed: ') + error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success(t('Logged out successfully'));
    } catch (error) {
      toast.error(t('Logout failed'));
    }
  };

  const handleImageUpload = async (file) => {
    if (!file) return null;

    const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = formData.image;

      // Upload new image if selected
      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
      }

      const dataToSave = {
        ...formData,
        image: imageUrl,
        updatedAt: serverTimestamp()
      };

      if (editingItem) {
        // Update existing
        const docRef = doc(db, activeTab, editingItem.id);
        await updateDoc(docRef, dataToSave);
        toast.success(t('Updated successfully'));
      } else {
        // Create new
        dataToSave.createdAt = serverTimestamp();
        await addDoc(collection(db, activeTab), dataToSave);
        toast.success(t('Created successfully'));
      }

      resetForm();
      loadData();
    } catch (error) {
      toast.error(t('Save failed: ') + error.message);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t('Are you sure you want to delete this item?'))) return;

    setLoading(true);
    try {
      await deleteDoc(doc(db, activeTab, id));
      toast.success(t('Deleted successfully'));
      loadData();
    } catch (error) {
      toast.error(t('Delete failed: ') + error.message);
    }
    setLoading(false);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setImagePreview(item.image);
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({});
    setImageFile(null);
    setImagePreview(null);
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'products':
        return (
          <form onSubmit={handleSubmit} className={styles.cmsForm}>
            <h3>{editingItem ? t('Edit Product') : t('Add Product')}</h3>

            <div className={styles.formGroup}>
              <label>{t('Title *')}</label>
              <Input
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Description *')}</label>
              <Textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Category *')}</label>
              <select
                className={styles.select}
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              >
                <option value="">{t('Select Category')}</option>
                <option value="Display Counters">{t('Display Counters')}</option>
                <option value="Kitchen Equipment">{t('Kitchen Equipment')}</option>
                <option value="Food Carts">{t('Food Carts')}</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>{t('Details')}</label>
              <Textarea
                value={formData.details || ''}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={4}
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Image')}</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              {imagePreview && (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} alt="Preview" />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                    className={styles.removeImage}
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className={styles.formActions}>
              <Button type="submit" disabled={loading}>
                {loading ? t('Saving...') : editingItem ? t('Update') : t('Create')}
              </Button>
              {editingItem && (
                <Button type="button" onClick={resetForm} variant="outline">
                  {t('Cancel')}
                </Button>
              )}
            </div>
          </form>
        );

      case 'projects':
        return (
          <form onSubmit={handleSubmit} className={styles.cmsForm}>
            <h3>{editingItem ? t('Edit Project') : t('Add Project')}</h3>

            <div className={styles.formGroup}>
              <label>{t('Name *')}</label>
              <Input
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Location *')}</label>
              <Input
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Category *</label>
              <Input
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Description *</label>
              <Textarea
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              {imagePreview && (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} alt="Preview" />
                </div>
              )}
            </div>

            <div className={styles.formActions}>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : editingItem ? 'Update' : 'Create'}
              </Button>
              {editingItem && (
                <Button type="button" onClick={resetForm} variant="outline">
                  {t('Cancel')}
                </Button>
              )}
            </div>
          </form>
        );

      case 'testimonials':
        return (
          <form onSubmit={handleSubmit} className={styles.cmsForm}>
            <h3>{editingItem ? t('Edit Testimonial') : t('Add Testimonial')}</h3>

            <div className={styles.formGroup}>
              <label>Name *</label>
              <Input
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Location *</label>
              <Input
                value={formData.location || ''}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Company *')}</label>
              <Input
                value={formData.company || ''}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>{t('Testimonial Text *')}</label>
              <Textarea
                value={formData.text || ''}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                required
                rows={4}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
              />
              {imagePreview && (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} alt="Preview" />
                </div>
              )}
            </div>

            <div className={styles.formActions}>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : editingItem ? 'Update' : 'Create'}
              </Button>
              {editingItem && (
                <Button type="button" onClick={resetForm} variant="outline">
                  {t('Cancel')}
                </Button>
              )}
            </div>
          </form>
        );

      default:
        return null;
    }
  };

  const renderList = () => {
    let items = [];
    switch (activeTab) {
      case 'products':
        items = products;
        break;
      case 'projects':
        items = projects;
        break;
      case 'testimonials':
        items = testimonials;
        break;
      default:
        items = [];
    }

    return (
      <div className={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            {item.image && (
              <img src={item.image} alt={item.title || item.name} className={styles.itemImage} />
            )}
            <div className={styles.itemContent}>
              <h4>{item.title || item.name}</h4>
              <p>{item.description || item.text}</p>
              {item.category && <span className={styles.badge}>{item.category}</span>}
              {item.location && <span className={styles.badge}>{item.location}</span>}
            </div>
            <div className={styles.itemActions}>
              <Button size="sm" onClick={() => handleEdit(item)}>
                <Edit size={16} />
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(item.id)}>
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (!user) {
    return (
      <div className={styles.admin} data-testid="admin-page">
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1>{t('Admin Login')}</h1>
            <p>{t('Access CMS Dashboard')}</p>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label>{t('Email')}</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="admin-email-input"
                />
              </div>
              <div className={styles.formGroup}>
                <label>{t('Password')}</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="admin-password-input"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className={styles.loginBtn}
                data-testid="admin-login-btn"
              >
                {loading ? t('Logging in...') : t('Login')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.admin} data-testid="admin-dashboard">
      <div className={styles.dashboard}>
        <div className={styles.header}>
          <h1>{t('CMS Dashboard')}</h1>
          <Button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>{t('Logout')}</span>
          </Button>
        </div>

        <div className={styles.tabs}>
          <button
            className={activeTab === 'products' ? styles.active : ''}
            onClick={() => { setActiveTab('products'); resetForm(); }}
          >

            {t('Products')}
          </button>
          <button
            className={activeTab === 'projects' ? styles.active : ''}
            onClick={() => { setActiveTab('projects'); resetForm(); }}
          >
            {t('Projects')}
          </button>
          <button
            className={activeTab === 'testimonials' ? styles.active : ''}
            onClick={() => { setActiveTab('testimonials'); resetForm(); }}
          >
            {t('Testimonials')}
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.contentGrid}>
            <div className={styles.formSection}>
              {renderForm()}
            </div>
            <div className={styles.listSection}>
              <h3>{t('Existing Items')}</h3>
              {renderList()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;