import React from "react";
import Project from "../../models/Portfolio";
import '../styles/BodyPortfolio.css';

function BodyPortfolio() {
    return (
        <div className="BodyPortfolio">
            <main class="card-container">
                <div class="row">
                    <div class="card">
                        <a target="_blank" rel="noreferrer"  href="https://tintin92.github.io/MovieDine/"><img
                            src="https://pbs.twimg.com/media/Ei-HVZ1WAAAN6ra?format=jpg&name=medium"
                            class="card-img-top" alt="MovieDine" /></a>
                        <div class="card-body">
                            <h5 class="card-title">MovieDine</h5>
                            <p class="card-text">A group project in which we attempted to create a page where one could
                            search for streaming film
                                and tv option and also find local restaurants. <a target="_blank" rel="noreferrer" 
                                    href="https://github.com/DrunkOnMystery/MovieDine">Github here.</a></p>
                        </div>
                    </div>
                    <div class="card">
                        <a target="_blank" rel="noreferrer" href="http://mega-awesome.herokuapp.com/"><img
                            src="https://pbs.twimg.com/media/EliB7nyX0AMYII0?format=jpg&name=large"
                            class="card-img-top" alt="Alientown" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Alientown</h5>
                            <p class="card-text">A group project in which we created an interactive and searchable database in mysql of UFO sightings. <a target="_blank" rel="noreferrer" 
                                href="https://github.com/DrunkOnMystery/alientown">Github here.</a></p>
                        </div>
                    </div>
                    <div class="card">
                        <a target="_blank" rel="noreferrer"  href="https://drunkonmystery.github.io/Day-Planner/"><img src="assets/DayPlanner.PNG"
                            class="card-img-top" alt="DayPlanner" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Day Planner</h5>
                            <p class="card-text">A day planner in which each hour is color coded, relative to the current
                        time. <a target="_blank" rel="noreferrer"  href="https://github.com/DrunkOnMystery/Day-Planner">Github
                            here.</a></p>

                        </div>
                    </div>
                    <div class="card">
                        <a target="_blank" rel="noreferrer"  href="https://drunkonmystery.github.io/Weather-Dashboard/?"><img
                            src="assets/WeatherDashboard.PNG" class="card-img-top" alt="Weather Dashboard" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Weather Dashboard</h5>
                            <p class="card-text">An interactive website that provides weather forecasts by city name
                            using APIs. <a target="_blank" rel="noreferrer" 
                                    href="https://github.com/DrunkOnMystery/Weather-Dashboard">Github here.</a></p>
                        </div>
                    </div>
                    <div class="card">
                        <a target="_blank" rel="noreferrer"  href="https://drive.google.com/file/d/1tOCY3EAFUWTDcYQWsJ7gIVr6pXem4dR-/view"><img
                            src="https://pbs.twimg.com/media/EliEVSAWoAECa1I?format=jpg&name=small" class="card-img-top" alt="Automated ReadMe Generator" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Automated ReadMe Generator</h5>
                            <p class="card-text">A Javascript application designed to automate and streamline the process of creating ReadMe files for projects on Github.
                            <a target="_blank" rel="noreferrer"  href="https://github.com/DrunkOnMystery/README_Generator">Github here.</a></p>
                        </div>
                    </div>
                    <div class="card">
                        <a target="_blank" rel="noreferrer"  href="https://drive.google.com/file/d/14bRtn-lsl4itscxhgUtw_zJ4Lc5AFiZG/view"><img
                            src="assets/Employee_Tracker.PNG" class="card-img-top" alt="Employee Tracker" /></a>
                        <div class="card-body">
                            <h5 class="card-title">MySQL Employee Tracker</h5>
                            <p class="card-text">This project is a MySQL database program designed to allow a manager to edit their employee database through the terminal console.<a target="_blank" rel="noreferrer" 
                                href="https://github.com/DrunkOnMystery/employee_tracker">Github here.</a></p>
                        </div>
                    </div>
                </div>
            </main>

        </div>

    )
}

export default BodyPortfolio;