import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './MarchandTable.css';
import { MarchandsService } from '../../../service/MarchandService';

const MarchandTable = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        MarchandsService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    return (
        <div className="user-table-container">
            <h6>La Liste des Marchands</h6>

            <div className="card">
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '60rem' }}>
                    <Column field="nom" header="Nom"  style={{ width: '25%' }}></Column>
                    <Column field="prenom" header="Prenom"  style={{ width: '25%' }}></Column>
                    <Column field="telephone" header="Telephone"  style={{ width: '25%' }}></Column>
                    <Column field="quartier.name" header="Quartier"  style={{ width: '25%' }}></Column>
                    <Column field="lieu" header="Lieu"  style={{ width: '25%' }}></Column>
                    <Column field="construction" header="Construction"  style={{ width: '25%' }}></Column>
                    <Column field="taxe" header="Taxe"  style={{ width: '25%' }}></Column>
                    <Column field="delais" header="Delais"  style={{ width: '25%' }}></Column>
                    <Column field="espace" header="Espace"  style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default MarchandTable