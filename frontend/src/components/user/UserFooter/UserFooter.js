import React from 'react';

function UserFooter(){
  return(
    <footer className="bg-light text-center text-lg-start " style={{ marginTop: '70px',marginBottom:'-10px' }}>
      <div className="text-center p-4" style={{ backgroundColor: '#2b2b28' }}>
        <p className="text-white mb-0">
          © {new Date().getFullYear()} || DoubleAces.com  || All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default UserFooter