import React, { useState } from 'react';
import ProductsTable from "../components/ProductsTable";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <ProductsTable />
        </div>
    );
}

export default Dashboard;