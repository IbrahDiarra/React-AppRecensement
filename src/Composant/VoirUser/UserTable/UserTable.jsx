import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './UserTable.css';
import { UsersService } from '../../../service/UserService';

export default function UserTable() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        UsersService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="user-table-container">
            <h6>La Liste des Recenseurs</h6>

            <div className="card">
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="username" header="Nom d'Utilisateur"  style={{ width: '15%' }}></Column>
                    <Column field="firstname" header="Nom"  style={{ width: '25%' }}></Column>
                    <Column field="lastname" header="Prenom"  style={{ width: '20%' }}></Column>
                    <Column field="phone" header="Telephone"  style={{ width: '20%' }}></Column>
                    <Column field="role" header="Role"  style={{ width: '20%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        