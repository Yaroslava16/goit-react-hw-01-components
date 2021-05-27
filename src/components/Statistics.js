import React from "react";

const Statistics = ({ title, statsLabel, statsPercentage }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>

    <ul class="stat-list">
      <li class="item">
        <span class="label">{statsLabel}</span>
        <span class="percentage">{statsPercentage}%</span>
      </li>
      <li class="item">
        <span class="label">{statsLabel}</span>
        <span class="percentage">{statsPercentage}%</span>
      </li>
      <li class="item">
        <span class="label">{statsLabel}</span>
        <span class="percentage">{statsPercentage}%</span>
      </li>
      <li class="item">
        <span class="label">{statsLabel}</span>
        <span class="percentage">{statsPercentage}%</span>
      </li>
    </ul>
  </section>
);

export default Statistics;
