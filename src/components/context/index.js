import React from 'react';
//create context to pass instead of props
const PhotoContext = React.createContext();

export const Provider = PhotoContext.Provider;
export const Consumer = PhotoContext.Consumer;