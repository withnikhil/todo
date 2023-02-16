import React, { useState } from 'react';
import { DatePicker, message, Alert, Button, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './index.css';
import DataTable from './components/DataTable';

const App = () => {

  

  return (
    // style={{ width: 400, margin: '100px auto' }}
    // <ConfigProvider
    //     theme={{
    //       token: {
    //         colorPrimary: '#00b96b',
    //       },
    //     }}
    //   >
    //     <Button />
    //   </ConfigProvider>

    <div style={{margin: '100px auto' }}>
        <DataTable/>
    </div>
  );
};

export default App;