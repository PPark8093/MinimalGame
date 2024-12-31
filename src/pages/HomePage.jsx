import React from 'react'
import "../styles/HomePage.css"

function HomePage() {
  return (
    <div className='m_container'>
        <h1 className='m_title'>Minimal Game</h1>
        <div className='m_inner_container_grid'>
          <button className='m_button'>틱택토</button>
          <button className='m_button'>스네이크</button>
          <button className='m_button'>반응속도</button>
          <button className='m_button'>테트리스</button>
          <button className='m_button'>수학</button>
          <button className='m_button'>기타</button>
        </div>
        <div className='m_inner_container_list'>
          <button className='m_button'>아이디어 제공</button>
        </div>
    </div>
  )
}

export default HomePage
