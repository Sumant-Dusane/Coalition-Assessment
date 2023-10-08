import React, { useState } from 'react';
import "./climb.scss";

export default function Climb() {
  const [currTab, setCurrTab] = useState(1);
  return (
    <div className='climb'>
      <div className="text__block">
        <div className="text__block__wrapper">
          <span>02.</span>
          <h1>Climb</h1>
          <p>Cras scelerisque id quam sed dignissim Pellentesque urna nunc, gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit dignissim tortor nec congue. </p>
        </div>
      </div>
      <div className="climb__content">
        <div className="climb__content__tab">
          <button onClick={() => setCurrTab(1)} className={currTab === 1 ? 'selected' : ''}>Mountain 1</button>
          <button onClick={() => setCurrTab(2)} className={currTab === 2 ? 'selected' : ''}>Mountain 2</button>
        </div>
        <div className="climb__content__main">
          {currTab === 1 ?
            <div className="tab tab--1">
              <div className="card">
                <div className="card__title">Schedule</div>
                <table>
                  <tbody>
                    <tr>
                      <td>25 Nov 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td>28 Nov 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>18 Dec 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>17 Jan 2017</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> :
            <div className="tab tab--2">
              <div className="card">
                <div className="card__title">Schedule</div>
                <table>
                  <tbody>
                    <tr>
                      <td>17 Nov 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13 Dec 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td>28 Dec 2016</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>9 Feb 2017</td>
                      <td>Vestibulum viverra</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
