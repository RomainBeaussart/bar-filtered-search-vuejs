<template>
    <div class="app fill-height">
        <vs-navbar color="#f19066" text-white square center-collapsed v-model="active">
            <template #left>
                <b>LegalTrade</b>
            </template>
            <vs-navbar-item :active="active == 'why'" id="why">
                Why LEGAL TRAD
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'engine'" id="engine">
                Recherche
            </vs-navbar-item>
            <!-- <vs-navbar-item :active="active == 'components'" id="components">
                Components
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">
                license
            </vs-navbar-item> -->
        </vs-navbar>
        <vs-row style="justify-content: center; margin: 0px; margin-top: 20px; background: #273c75" v-if="active === 'why'" vs-type="flex" vs-justify="center" vs-align="center" w="4">
            <vs-col vs-type="flex" vs-justify="center" vs-align="start" w="8">
                <img :src="lowyer_homepage" alt="" style="width: 100%"/>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="4" style="height:100%">
                <div style="margin-left: -30%; color: #FFF">
                    <h3> Why LEGAL TRAD ? </h3>
                    <p>"Nul n'est censé ignorer la loi" mais personne ne la comprend...</p>
                    <p>LEGAL TRAD est né d'une volonté de rendre le droit plus intelligible et plus accessible aux justiciables. </p>
                </div>
            </vs-col>
        </vs-row>


        <template v-if="active === 'engine'">
            <sc-search-bar>
            </sc-search-bar>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ScSearchBar from './views/SearchBar.vue'
import { lowyer_homepage } from "./assets/exports"

@Component({
    components: {
        ScSearchBar
    }
})
export default class App extends Vue {

    active = "why"

    get lowyer_homepage() {
        return lowyer_homepage
    }
    
}
</script>
<style>
.app {
    width: 100%;
    height: 100vh;
    display: flex;
    padding-top: 20px;
    align-items: start;
    justify-content: center;
    font-family: 'Circular std' !important;
}
</style>
