import React, { useState } from 'react';
import { useScrollReveal } from '@/hooks/useGsapAnimations';
import Modal from '@/components/UI/Modal';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useScrollReveal('.reveal', { y: 60, stagger: 0.12 });

  const projects = [
    {
      id: 1,
      name: 'Haldiram Restaurant',
      location: 'Nagpur, Maharashtra',
      category: 'Commercial Kitchen',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
      description: 'Complete kitchen setup with refrigeration units and display counters for one of India\'s leading food chains.'
    },
    {
      id: 2,
      name: 'Theobroma Bakery',
      location: 'Mumbai, Maharashtra',
      category: 'Bakery Equipment',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/1-scaled.jpg',
      description: 'Premium display counters and cake chillers for flagship store.'
    },
    {
      id: 3,
      name: 'Ajit Bakery',
      location: 'Nagpur, Maharashtra',
      category: 'Bakery Equipment',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/2-scaled.jpg',
      description: 'Custom-built display units and refrigeration systems.'
    },
    {
      id: 4,
      name: 'Dhorajwala Sweets',
      location: 'Nagpur, Maharashtra',
      category: 'Sweet Shop',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/3-scaled.jpg',
      description: 'Multi-tier display counters for traditional sweets.'
    },
    {
      id: 5,
      name: 'Delice Bakery',
      location: 'Pune, Maharashtra',
      category: 'Bakery Equipment',
      image: 'https://i0.wp.com/abidnagpur.com/wp-content/uploads/2025/06/4-scaled.jpg',
      description: 'Complete bakery equipment package including ovens and chillers.'
    },
    {
      id: 6,
      name: 'Pista House',
      location: 'Hyderabad, Telangana',
      category: 'Sweet Shop',
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800',
      description: 'Large-scale refrigeration and display solutions for multiple outlets.'
    }
  ];

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