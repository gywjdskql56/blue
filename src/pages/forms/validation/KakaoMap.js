import React, { useEffect, useState } from 'react';
import { markerdata } from "./data/markerData";
const { kakao } = window;

const MapTest = () => {
    const [map,setMap] = useState(null);

    //처음 지도 그리기
    useEffect(()=>{
        const container = document.getElementById('map');
        const options = { center: new kakao.maps.LatLng(33.450701, 126.570667), level:3 };
{/*        const kakaoMap = new kakao.maps.Map(container, options);
        setMap(kakaoMap); */}
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    },[])

    return (
        <div
            style={{
                width: '100%',
                display: 'inline-block',
                marginLeft: '5px',
                marginRight: '5px',
            }}
        >
            <div id="map" style={{ width: '99%', height: '500px' }}></div>
        </div>
    );
};

export default MapTest;