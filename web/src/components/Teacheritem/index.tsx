import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

interface TeacherItemProps {
    teacherClass: {
        id: number,
        avatar: string,
        bio: string,
        cost: number,
        name: string,
        subject: string,
        whatsapp: string
    }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacherClass }) => {

    async function handleCreateNewConnection() {
        api.post("/connections", {
            user_id: teacherClass.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacherClass.avatar} alt={teacherClass.name} />
                <div>
                    <strong>{teacherClass.name}</strong>
                    <span>{teacherClass.subject}</span>
                </div>
            </header>
            <p>{teacherClass.bio}</p>
            <footer>
                <p>Preço/hora
            <strong>R$ {teacherClass.cost}</strong></p>
                <a
                    onClick={handleCreateNewConnection}
                    href={`https://wa.me/${teacherClass.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
                </a>
            </footer>
        </article >
    )
}

export default TeacherItem;