import { useState, useEffect, createRef } from 'react';

const ScrollLoad = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const ref = createRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('intersected')
          setTimeout(() => {
            setLoading(false);
          }, 1000)
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  }, []);

  const scrollToPosition = function(node) {
    if (node) {
      
    }
  }

  return (
    <div style={{marginTop: 1000}} ref={ref}>
      {
        loading ? 'Loading...' : children
      }
    </div>
  )
}

export default ScrollLoad;
