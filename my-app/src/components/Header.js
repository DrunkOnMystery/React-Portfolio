import React from "react";

function Header() {
    return (
        <div className="Header">
            <h1>Benjamin A. Brumby</h1>
            <ul class="nav justify-content-end">

                <li class="nav-item">
                    <a class="nav-link inactive" href="index.html"> <strong>About Me</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="portfolio.html"><strong>Portfolio</strong></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html" tabindex="-1" aria-disabled="true"><strong>Contact</strong></a>
                </li>
            </ul>
        </div>
    )
}

export default Header;