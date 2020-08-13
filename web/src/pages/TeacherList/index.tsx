import React from 'react';

import PageHeader from '../../components/PageHeader';
import Teacheritem from '../../components/Teacheritem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList: React.FC = () => {
    return (
        <div id="page-teachers-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Química", label: "Química" },
                            { value: "Matemática", label: "Matemática" }
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        options={[
                            { value: "0", label: "Domingo" },
                            { value: "1", label: "Segunda-Feira" },
                            { value: "2", label: "Terça-Feira" },
                            { value: "3", label: "Quarta-Feira" },
                            { value: "4", label: "Quinta-Feira" },
                            { value: "5", label: "Sexta-Feira" },
                            { value: "6", label: "Sábado" }
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
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