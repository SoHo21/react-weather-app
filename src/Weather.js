import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
    <div className="Weather">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100"/>
            </div>
            </div>
        </form>
        <h1>
            Tokyo
        </h1>
        <ul>
            <li>
                Monday 10:00
            </li>
            <li>
                Sunny
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src="https://www.freeiconspng.com/uploads/sun-icon-16.jpg" alt="Sunny" className="float-left" />
                <div className="float-left">
                <span className="temperature">15</span>
                <span className="unit">°C</span>
                </div>
                </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 30%
                    </li>
                    <li>
                        Humidity: 70%
                    </li>
                    <li>
                        Wind: 10 km/h
                    </li>
                </ul>
            </div>
        </div>
        </div>
        );
}