// creates a context to share between components 
import { createContext } from 'react';

// pass initial value 
const UserContext = createContext(null);

export default UserContext;