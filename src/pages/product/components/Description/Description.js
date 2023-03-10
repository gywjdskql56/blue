import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Col, Row, Collapse } from 'reactstrap';

import s from './Description.module.scss';
import Rating from '../Rating/Rating';

class Description extends Component {
  state = {
    accordion: [false, false, false],
  };

  toggleAccordion(id) {
    const { accordion } = this.state;
    const newAccordion = [...accordion];

    newAccordion[id] = !newAccordion[id];

    this.setState({ accordion: newAccordion });
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className={s.productDescription}>
            <div className={cx(s.productDescriptionInfo, s.productDescriptionBlock)}>
                <h3>매물 장점 및 설명</h3>
                <p className="dot-before">{data.description_1}</p>
                <p className="dot-before">{data.description_2}</p>
            </div>
            <div className={s.productDescriptionBlock}>
                <h3>매물 번호</h3>
                <div>{data.code}</div>
            </div>
            <div className={s.productDescriptionBlock}>
                <h3>공유하기</h3>
                <div>
                    {/* eslint-disable */}
                    매물을 공유하세요 <a href="#">#{data.hashtag}</a>
                    {/* eslint-enable */}
                    <div className={s.socialList}>
                        <div><i className="fa fa-facebook"/></div>
                        <div><i className="fa fa-instagram"/></div>
                        <div><i className="fa fa-twitter"/></div>
                    </div>
                </div>
            </div>
            <div className={s.productDescriptionBlock}>
                <h3>1km 내의 편의시설</h3>
                <ul>
                    {data.technology.map(t => (
                        <li key={t} className="dot-before">{t}</li>
                    ))}
                </ul>
            </div>
            <div className={s.productDescriptionBlock}>
                <h3>조회수</h3>
                <div className={s.reviews}>
                    <Rating rating={data.rating}/>
                    32개의 찜
                    {/* eslint-disable */}
                    <a className="text-primary" href="#">Read all</a>
                    {/* eslint-enable */}
                </div>
            </div>
        </div>
        <Row className={cx(s.productDescription, s.productDescriptionMobile)}>
          <Col xs="12">
              <div className={cx("card panel", s.card)}>
                  <div className='card-header panel-header panel-first' role="button" onClick={() => {this.toggleAccordion(0);}}>
                      <div className="mb-0">
                          <button className="accordion-toggle">
                              PRODUCT DESCRIPTION
                              <i className={`fa fa-angle-down fa-2x ${this.state.accordion[0] ? 'expanded' : ''}`}/>
                          </button>
                      </div>
                  </div>
                  <Collapse className="panel-body" isOpen={this.state.accordion[0]}>
                      <div className="card-body">
                          <p className="dot-before">{data.description_1}</p>
                          <p className="dot-before">{data.description_2}</p>
                      </div>
                  </Collapse>
              </div>
              <div className={cx("card panel", s.card)}>
                  <div className='card-header panel-header' role="button" onClick={() => {
                      this.toggleAccordion(1);
                  }}>
                      <div className="mb-0">
                          <button className="accordion-toggle">
                              PRODUCT CODE
                              <i className={`fa fa-angle-down fa-2x ${this.state.accordion[1] ? 'expanded' : ''}`}/>
                          </button>
                      </div>
                  </div>
                  <Collapse className="panel-body" isOpen={this.state.accordion[1]}>
                      <div className="card-body">
                          {data.code}
                      </div>
                  </Collapse>
              </div>
              <div className={cx("card panel", s.card)}>
                  <div className='card-header panel-header' role="button" onClick={() => {
                      this.toggleAccordion(2);
                  }}>
                      <div className="mb-0">
                          <button className="accordion-toggle">
                              SHARE
                              <i className={`fa fa-angle-down fa-2x ${this.state.accordion[2] ? 'expanded' : ''}`}/>
                          </button>
                      </div>
                  </div>
                  <Collapse className="panel-body" isOpen={this.state.accordion[2]}>
                      <div className="card-body">
                          {/* eslint-disable */}
                          Share photo with a tag <a className="text-primary" href="#">#{data.hashtag}</a>
                          {/* eslint-enable */}
                          <div className={s.socialList}>
                              <div><i className="fa fa-facebook"/></div>
                              <div><i className="fa fa-instagram"/></div>
                              <div><i className="fa fa-twitter"/></div>
                          </div>
                      </div>
                  </Collapse>
              </div>
              <div className={cx("card panel", s.card)}>
                  <div className='card-header panel-header' role="button" onClick={() => {
                      this.toggleAccordion(3);
                  }}>
                      <div className="mb-0">
                          <button className="accordion-toggle">
                              TECHNOLOGY
                              <i className={`fa fa-angle-down fa-2x ${this.state.accordion[3] ? 'expanded' : ''}`}/>
                          </button>
                      </div>
                  </div>
                  <Collapse className="panel-body" isOpen={this.state.accordion[3]}>
                      <div className="card-body">
                          <ul>
                              {data.technology.map(t => (
                                  <li key={t} className="dot-before">{t}</li>
                              ))}
                          </ul>
                      </div>
                  </Collapse>
              </div>
              <div className={cx("card panel", s.card)}>
                  <div className='card-header panel-header' role="button" onClick={() => {
                      this.toggleAccordion(4);
                  }}>
                      <div className="mb-0">
                          <button className="accordion-toggle">
                              RATING & REVIEWS
                              <i className={`fa fa-angle-down fa-2x ${this.state.accordion[4] ? 'expanded' : ''}`}/>
                          </button>
                      </div>
                  </div>
                  <Collapse className="panel-body" isOpen={this.state.accordion[4]}>
                      <div className="card-body">
                          <div className={s.reviews}>
                              <Rating rating={data.rating}/>
                              32 Reviews
                              {/* eslint-disable */}
                              <a href="#">Read all</a>
                              {/* eslint-enable */}
                          </div>
                      </div>
                  </Collapse>
              </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Description.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Description;
