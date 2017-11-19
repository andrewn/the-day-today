import { h, render, Component } from 'preact';
import moment from 'moment';
/** @jsx h */

const Calendar = () => {
	const m = moment();
	return (
		<time class="calendar">
			<span class="day">{m.format('ddd')}</span>
			<span class="date">{m.format('D')}</span>
			<span class="month">{m.format('MMM')}</span>
			<span class="year">{m.format('YYYY')}</span>
      {/* <span class="time">{m.format('HH:mm')}</span> */}
		</time>
	);
}

export default class App extends Component {
    render(props, state) {
		return (
			<div class="container">
				<div class="frame">
					<Calendar />
				</div>
			</div>
		);
	}
}
