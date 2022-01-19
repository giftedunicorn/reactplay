import { useState, useEffect, useRef } from 'react';

const ScrollLoad = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  
  useEffect(() => {
    // const observer = createObserver()
    // return () => {
    //   observer.disconnect();
    // }
    document.addEventListener('scroll', scrollToPosition)
    return () => {
      document.removeEventListener('scroll', scrollToPosition)
    }
  }, []);

  const createObserver = function() {
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
    let node = ref.current
    observer.observe(node);
    return observer
  }

  const scrollToPosition = function(e) {
    let node = ref.current
    if (!node) return null

    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight 
    const top = node.getBoundingClientRect() && node.getBoundingClientRect().top

    if (top <= viewPortHeight) {
      setTimeout(() => {
        setLoading(false);
      }, 1000)
    } else {
      setLoading(true)
    }
  }

  return (
    <div style={{marginTop: 1000}}>
      <div ref={ref}>
      {
        loading ? 'Loading...' : children
      }
      </div>
    </div>
  )
}

export default ScrollLoad;
