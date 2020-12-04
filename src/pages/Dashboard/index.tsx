import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

const Dashbord: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Repositórios no GitHub</Title>

            <Form>
                <input placeholder="Digite o nome de repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/52255226?s=460&u=3742f9bd8250cdbad284dfcb1ec98556268875af&v=4"
                        alt="Rubens Kishimoto"
                    />
                    <div>
                        <strong>Desafio Expasion Week</strong>
                        <p> Expasion Week promovendo a soft skill de comunicacao</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/52255226?s=460&u=3742f9bd8250cdbad284dfcb1ec98556268875af&v=4"
                        alt="Rubens Kishimoto"
                    />
                    <div>
                        <strong>Desafio Expasion Week</strong>
                        <p> Expasion Week promovendo a soft skill de comunicacao</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/52255226?s=460&u=3742f9bd8250cdbad284dfcb1ec98556268875af&v=4"
                        alt="Rubens Kishimoto"
                    />
                    <div>
                        <strong>Desafio Expasion Week</strong>
                        <p> Expasion Week promovendo a soft skill de comunicacao</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )

};

export default Dashbord;