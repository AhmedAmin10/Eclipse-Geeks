// SessionsContainer.js

import dynamic from 'next/dynamic';

const Sessions = dynamic(() => import('../components/Sessions'), {
  ssr: false, // Set ssr to false to load it only on the client side
});

export default Sessions;
