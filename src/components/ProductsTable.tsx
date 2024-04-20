import React, { useState } from 'react';
import {Table} from "reactstrap";
import {callApi} from "../calls/CallApi"
import Constant from "../configuration/constant";
import {IProductVersion, ITableRow} from "../domain/ProductVersion";

function ProductsTable() {
    const [products, setProducts] = useState<IProductVersion[]>([]);
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<ITableRow[]>([]);

    React.useEffect(() => {
        getProducts();
    }, []);

    async function getProducts()  {
       callApi({ method: "GET", url:Constant.API_TABLE_ROW + "/all"})
           .then((response: Response | undefined) => {
               if (response && response.ok)
                   return response.json();
           }).then((json: ITableRow[]) => {
               setRows(json);
           }).catch((error: any) => {
               throw new Error(error);
           });
    }

    return (
        <Table striped>
            <tbody>
                {rows.map((row: ITableRow, index) => {
                    return (
                        <tr>
                            <td key={row.id}>
                                {row.id}
                            </td>
                            <td key={row.id + index}>
                                {row.branch}
                            </td>
                            <td key={row.id + index + 1}>
                                {row.date.toString()}
                            </td>
                            {row.productVersions.map((productVersion: IProductVersion, index) => {
                                return (
                                    <td key={productVersion.id + index}>
                                        {productVersion.product.name + ' ' +productVersion.version + ' Notes: ' + productVersion.description}
                                    </td>
                                )})}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default ProductsTable;