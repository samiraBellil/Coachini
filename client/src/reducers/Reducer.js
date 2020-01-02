import { ADD_BLOG, Delete_BLOG, UPDATE_BLOG } from '../actions/types'
import uuid from 'uuid'

const initialstate = [
    {
        image: "https://www.nafeusemagazine.com/photo/art/grande/23342872-25664142.jpg?v=1530200819",
        title: " Les bienfaits du sport sur la santé",
        introParagraph: " Faire du sport est bon pour la santé. Sans doute, puisque cette « vérité » nous est régulièrement rappelée. Mais pourquoi ? Pourquoi une activité physique régulière améliorerait-elle notre santé et nous maintiendrait-elle en forme ? Avant d’expliquer pourquoi, rappelons que diverses études ont montré, entre autres, que bouger régulièrement réduit le risque de développer un diabète, de mourir d’un accident vasculaire cérébral ou d’une crise cardiaque, prévient certains cancers, améliore le moral, fortifie les os, renforce les muscles, augmente les capacités respiratoires, réduit les risques de chutes et de fractures chez la personne âgée, aide à contrôler l’excès de poids, etc. ! ",
        content: " <h1> 150 minutes d’activité modérée par semaine: <h1/> Des études sont aussi menées pour savoir comment les divers systèmes de l’organisme – cardiovasculaire, digestif, endocrinien, nerveux, etc. – sont modifiés par l’exercice physique. Elles suggèrent que les bénéfices résulteraient d’une petite amélioration de nombreux aspects physiologiques et non d’un effet important limité à quelques processus biologiques.On s’est aussi aperçu qu’il n’est pas besoin d’être un adepte du triathlon pour recueillir les fruits de l’exercice physique. Il y a 20 ans, les experts en médecine préventive ne prônaient que l’activité intense. Aujourd’hui, ils insistent aussi sur les bénéfices de séances régulières et modérées. L’une d’entre nous (JoAnn Manson) a contribué à démontrer les bienfaits comparables, sur la santé, de l’exercice physique intense ou non, dans le cadre d’études à grande échelle. Conduites de 1976 à 1989, ces études, réalisées sur 238 000 infirmières volontaires, sont parmi les plus vastes menées sur les facteurs influant sur la santé des femmes. À partir de leurs données et d’autres, les dernières directives relatives à l’exercice physique de l’Organisation mondiale de la santé, publiées en 2010, recommandent de pratiquer au moins deux heures et demie d’activité modérée par semaine (la marche rapide, par exemple) ou une heure et quart d’une activité d’endurance soutenue, tel le jogging, une fois par semaine, ainsi que des exercices de renforcement musculaire au moins deux jours par semaine. <h1>Bon pour la mémoire <h1/> Dans un premier temps, l’organisme brûle les molécules de glucose stockées dans le foie et les muscles sous forme d’un composé nommé glycogène. Au cours de l’activité physique, le stock de glycogène disponible diminue et les molécules de triglycérides (ils contiennent des acides gras) deviennent la source principale de carburant. La combustion donne certains sous-produits, tels l’acide lactique et le dioxyde de carbone, qui, des muscles, passent dans le sang. La concentration accrue de ces composés provoque des réactions biochimiques dans le cerveau, les poumons et le cœur, lesquelles facilitent leur élimination.Les bienfaits de l’exercice se font sentir quand celui-ci devient une routine. L’organisme s’adapte aux exigences accrues dont il fait l’objet et acquiert de l’endurance à mesure que la personne devient plus performante. Par exemple, les poumons absorbent davantage d’oxygène à mesure que la respiration devient plus profonde et que le cœur pompe plus de sang à chaque battement. Les modifications biologiques qui en résultent améliorent la santé à long terme. <img src='https://medias.pourlascience.fr/api/v1/images/view/5d1b6174d286c27fd23a3e75/default/image.jpg' ",

    },

];


const Reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BLOG:
            return state.concat(action.payload)
        case Delete_BLOG:
            return state.filter(el => el.id === action.payload ? false : true)
        case UPDATE_BLOG:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        default:
            return state;
    }
}
export default Reducer;