<template>
    <v-container
        class="justify-center text-center main-card-container"
    >
            <div
                class="d-inline-block main-card-form main-card-line-1 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                            <v-card-title>
                                <!--
                                <v-icon
                                    medium
                                    left
                                >
                                    mdi-store-plus-outline
                                </v-icon>
                                -->
                                <span class="font-weight-bold">이번주 프리마켓 현황</span>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form">
                                    <span>총 </span>
                                    <span>11건</span>
                                </div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </div>
            
            <div
                class="d-inline-block main-card-form main-card-line-2 justify-center text-center margin-0-auto"
            >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="0"
                >
                    <v-card
                        class="mx-auto justify-center main-card"
                        outlined
                        :elevation="hover ? 16 : 2"
                    > 
                        <v-card-title>
                            <!--
                            <v-icon
                                large
                                left
                            >
                                mdi-twitter
                            </v-icon>
                            -->
                            <span class="font-weight-bold">이번주 프리마켓 현황</span>
                        </v-card-title>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-row>
                                <div class="main-card-text-form">
                                    <span class="font-weight-bold sub-">총 </span>
                                    <span>11건</span>
                                </div>
                            </v-row>
                        </v-card-text>

                    </v-card>
                </v-hover>
            </div>
    </v-container>
</template>

<style lang="scss">
.main-card-container {
    margin-top: 10px;
    max-width: 50rem;
}

.main-card-form {
    height: auto;
    padding: 0.5rem 1.1rem;
    max-width:30rem;
}

.main-card {
    height: 120px;
    padding: 0.5rem;
    border-radius: 12px !important;
    border: 0.0625rem solid #ccc !important;
    cursor: pointer;

    span {
        font-size: 14px;
    }
}

.main-card-text-form {
    text-align: right;
    width: 95%;
    margin-top: 8px;
    color: black;
}
</style>