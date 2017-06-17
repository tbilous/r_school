// eslint-disable-next-line no-unused-vars
import React, { DOM, Component } from 'react';
import PropTypes from 'prop-types';

export default class PieChart extends Component {
  componentDidMount() {
// eslint-disable-next-line no-undef
    this.chart = c3.generate({
      bindto: this.refs.chart,
      data: {
        columns: this.props.columns,
        type : 'pie',
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.chart.load({ columns: nextProps.columns });
    }
  }

  render() {
    return (
      DOM.div({ref: 'chart'})
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array
};
