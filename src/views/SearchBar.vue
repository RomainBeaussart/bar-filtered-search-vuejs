<template>
    <vs-row style="justify-content: center; margin-top: 60px">
        <vs-col vs-type="flex" vs-justify="center" vs-align="start" w="7">
            <vs-input
                type="text"
                v-model="value"
                label-placeholder="Recherchez un terme"
                icon-after
                block
                @click-icon="setPanel()"
            >
                <template #icon>
                    <i class='bx bx-search'></i>
                </template>
            </vs-input>
            <tempalte v-if="def">
                <h3>{{ def.name }}</h3>
                <p v-for="(t, i) of def.text" :key="i">{{ t }}</p>
                <tempalte v-if="def.nb">
                    <i>N.B: </i> {{ def.nb }}
                </tempalte>
            </tempalte>
        </vs-col>
    </vs-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SearchBar extends Vue {
    value = ""

    db = [
        {
            name: "Mise sous tutelle",
            text: ["La tutelle est une mesure judiciaire destinée à protéger une personne majeure et/ou tout ou partie de son patrimoine si elle n'est plus en état de veiller sur ses propres intérêts. Un tuteur la représente dans les actes de la vie civile. Le juge peut énumérer, à tout moment, les actes que la personne peut faire seule ou non, au cas par cas."]
        }, {
            name: "Usufruit",
            text: ["L'usufruit est le droit d'utiliser un bien et d'en percevoir les revenus, sans en être propriétaire. L'usufruitier a des droits et obligations. Le droit à l'usufruit est temporaire."]
        }, {
            name: "Caution",
            text: [`Le cautionnement est une sûreté personnelle par laquelle la caution s'engage personnellement à payer le créancier en cas de défaillance du débiteur.`,
                   `La caution au sens juridique du terme ne doit pas être confondue avec la \"caution\" dans le cadre d'une location d'appartement.`]
        }, {
            name: "Créance",
            text: [`La créance naît de n’importe quel rapport d’obligation (légal, contractuel) et correspond à ce que le créancier est en droit de réclamer au débiteur comme payer une somme d’argent ou exécuter une prestation. La créance est donc "l'inverse d'une dette".`]
        }, {
            name: "Mise en demeure",
            text: ["Il s’agit d’un acte par lequel un créancier demande à son débiteur d’exécuter une obligation.",
                   "Une lettre de mise en demeure est donc un courrier incitant le débiteur à s'exécuter, qu'il s'agisse du paiement d'une somme d'argent ou de l'exécution d'une prestation."],
            nb: "La mise en demeure a une valeur juridique, ce qui permet d’exercer un moyen de pression sur le débiteur. En outre, la mise en demeure est une étape obligatoire pour pouvoir entamer une procédure d’injonction de payer (procédure devant le juge qui permet d’obtenir le recouvrement des factures). En effet, cela permet de faire constater au juge que le débiteur n’a toujours pas exécuté ses engagements malgré l’envoi de la lettre de mise en demeure."
        }
    ]

    get def() {
        if(!this.value || this.value.length <=3) {
            return {
                name:"Entrez une recherche",
                text: ["\"Nul n'est censé ignorer la loi\" mais personne ne la comprend...","Grace a LegalTrade, vous pouver effecteur une recherche simple afin de comprendre les termes juridique", "Nous somme né dans la volonté de rendre le droit plus intelligible et plus accessible"]
            }
        }
        let articles = this.db.filter(item => item.name.toLowerCase().includes(this.value.toLowerCase()))
        debugger
        if(articles.length) {
            return articles[0]
        }
    }
}
</script>