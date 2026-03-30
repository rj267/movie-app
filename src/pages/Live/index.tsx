const Live = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center', minHeight: '80vh' }}>
      <h1>Asianet Live</h1>
      <a 
        href="https://www.asianetnews.com" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '15px 30px',
          backgroundColor: '#dc2626',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
          marginTop: '20px'
        }}
      >
        Watch Live Now
      </a>
    </div>
  );
};

export default Live;

