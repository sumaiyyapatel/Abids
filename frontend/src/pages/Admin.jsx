import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';
import { Textarea } from '@/components/UI/textarea';
import { toast } from 'sonner';
import { LogOut, Plus, Trash2, Edit } from 'lucide-react';
import styles from './Admin.module.css';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Login failed: ' + error.message);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  if (!user) {
    return (
      <div className={styles.admin} data-testid="admin-page">
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1>Admin Login</h1>
            <p>Access CMS Dashboard</p>
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label>Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="admin-email-input"
                />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
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
                {loading ? 'Logging in...' : 'Login'}
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
          <h1>CMS Dashboard</h1>
          <Button onClick={handleLogout} className={styles.logoutBtn} data-testid="logout-btn">
            <LogOut size={18} />
            <span>Logout</span>
          </Button>
        </div>

        <div className={styles.tabs}>
          <button 
            className={activeTab === 'products' ? styles.active : ''}
            onClick={() => setActiveTab('products')}
            data-testid="tab-products"
          >
            Products
          </button>
          <button 
            className={activeTab === 'projects' ? styles.active : ''}
            onClick={() => setActiveTab('projects')}
            data-testid="tab-projects"
          >
            Projects
          </button>
          <button 
            className={activeTab === 'testimonials' ? styles.active : ''}
            onClick={() => setActiveTab('testimonials')}
            data-testid="tab-testimonials"
          >
            Testimonials
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.comingSoon}>
            <h2>CMS Features Coming Soon</h2>
            <p>Firebase-powered content management will be available here.</p>
            <ul>
              <li>Manage Products & Categories</li>
              <li>Update Project Portfolio</li>
              <li>Add/Edit Testimonials</li>
              <li>Upload Images to Firebase Storage</li>
              <li>Update Company Information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;