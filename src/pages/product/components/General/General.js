import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Rating from '../Rating/Rating';

import s from './General.module.scss';

const General = ({ rating, title, subtitle, price }) => (
  <div className={s.general}>
    <div className={s.ratingWrapper}>
      <Rating className="text-success" rating={rating} />
    </div>
    <div className={s.dataWrapper}>
      <span className={cx(s.title, 'title')}>{title}</span>
      <span className={cx(s.subtitle, 'subtitle')}>{subtitle}</span></div>
    <span className={s.price}>{price}억원</span>
    <span className={cx(s.subtitle, 'subtitle')}>* 중개수수료 매도인 부담</span>
    <span className={cx(s.subtitle, 'subtitle')}>* 가격 협의 가능</span>
    <span className={cx(s.subtitle, 'subtitle')}>* 올수리 완료</span>
  </div>
);

General.propTypes = {
    rating: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.any.isRequired,
};

export default General;
