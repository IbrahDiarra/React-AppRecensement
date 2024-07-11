import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { CustomerService } from '../../../service/CustomerService';
import './UserTable.css';

export default function UserTable() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="user-table-container">
            <h6>La Liste des Marchands</h6>

            <div className="card">
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                    <Column field="country.name" header="Country" sortable style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" sortable style={{ width: '25%' }}></Column>
                    <Column field="representative.name" header="Representative" sortable style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        