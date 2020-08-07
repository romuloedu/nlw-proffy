import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/Teacheritem';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
      <div id="page-teachers-list" className="container">
        <PageHeader title="Estes são os proffys disponíveis">
            <form id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject"/>
                </div>
                <div className="input-block">
                    <label htmlFor="week_day">Dia da Semana</label>
                    <input type="text" id="week_day"/>
                </div>
                <div className="input-block">
                    <label htmlFor="time">Hora</label>
                    <input type="text" id="time"/>
                </div>
            </form>
        </PageHeader>
        <main>
            <Teacheritem />
            <Teacheritem />
            <Teacheritem />
            <Teacheritem />
            <Teacheritem />
        </main>
      </div>
  )
}

export default TeacherList;