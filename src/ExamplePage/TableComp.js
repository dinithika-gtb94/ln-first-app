import React from 'react';
import ImgComp from './ImgComp';
import './TableCompStyle.css';

export default function TableComp() {
  return (
    <div className="container">
        <div className="row">
            <div className='col-sm-4'>
                <table className="table tablecomp">
                    <thead>
                        <tr>
                        <th scope="col">TH 01</th>
                        <th scope="col">TH 02</th>
                        <th scope="col">TH 03</th>
                        <th scope="col">TH 04</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>TD 01</td>
                            <td>TD 01</td>
                            <td>TD 01</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>TD 02</td>
                            <td>TD 02</td>
                            <td>TD 02</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>TD 03</td>
                            <td>TD 03</td>
                            <td>TD 03</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>TD 04</td>
                            <td>TD 04</td>
                            <td>TD 04</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>TD 05</td>
                            <td>TD 05</td>
                            <td>TD 05</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>TD 06</td>
                            <td>TD 06</td>
                            <td>TD 06</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>TD 07</td>
                            <td>TD 07</td>
                            <td>TD 07</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-sm-8">
                <ImgComp/>
            </div>
        </div>
    </div>
  )
}
