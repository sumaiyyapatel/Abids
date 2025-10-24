import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import Modal from '@/components/UI/Modal';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';


const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  useScrollReveal('.reveal', { y: 60, stagger: 0.12 });

  // ✅ Fetch projects from CMS
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'projects'));
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className={styles.projects} data-testid="projects-page">
      <section className={styles.hero} data-testid="projects-hero">
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className="reveal">Our Projects</h1>
          <p className="reveal">Delivering excellence across India</p>
        </div>
      </section>

      <section className={styles.gallery} data-testid="projects-gallery">
        <div className={styles.container}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`${styles.projectCard} reveal`}
                onClick={() => setSelectedProject(project)}
                data-testid={`project-card-${index}`}
              >
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.name} />
                  <div className={styles.projectOverlay}>
                    <ExternalLink size={32} />
                  </div>
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectCategory}>{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.name}
        >
          <img src={selectedProject.image} alt={selectedProject.name} style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
          <p style={{ marginBottom: '0.5rem' }}><strong>Location:</strong> {selectedProject.location}</p>
          <p style={{ marginBottom: '1rem' }}><strong>Category:</strong> {selectedProject.category}</p>
          <p>{selectedProject.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default Projects;