import { Article } from '../article';

export const ARTICLES: Article[] = [
    {
        id: '0',
        title: 'Informações sobre TEA',
        htmlContent: '<h1>Informações sobre TEA</h1>',
        topicId: '1',
        disabled: false,
    },
    { id: '0', title: 'Importancia do Ensino Inclusivo', htmlContent: '', topicId: '1', disabled: true },
    { id: '0', title: 'Como o professor pode ajudar', htmlContent: '', topicId: '1', disabled: true },
    { id: '0', title: 'Atividades em conjunto', htmlContent: '', topicId: '2', disabled: true },
    { id: '0', title: 'Melhorando a interação social', htmlContent: '', topicId: '2', disabled: true },
    { id: '0', title: 'Participação da escola', htmlContent: '', topicId: '3', disabled: true },
    { id: '0', title: 'Criando uma rotina', htmlContent: '', topicId: '3', disabled: true },
    {
        id: '1',
        title: 'A hierarquia de dica',
        htmlContent: '',
        topicId: '3',
        disabled: true,
    },
    { id: '0', title: 'Sobrecarga sensorial', htmlContent: '', topicId: '4', disabled: true },
    { id: '0', title: 'Suporte da família', htmlContent: '', topicId: '4', disabled: true },
    { id: '2', title: 'A importância dos incentivos', htmlContent: 'rotina', topicId: '4', disabled: true },
    { id: '0', title: 'Quando a criança tem uma crise', htmlContent: '', topicId: '4', disabled: true },
    { id: '0', title: 'A criança não consegue se comunicar', htmlContent: '', topicId: '4', disabled: true },
    { id: '0', title: 'Adaptação de materiais', htmlContent: '', topicId: '5', disabled: true },
];
