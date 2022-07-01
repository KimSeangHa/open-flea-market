<template>
    <v-container class="justify-center text-center main-container">
        <v-simple-table height="auto">
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-center">
                        위치
                    </th>
                    <th class="text-center">
                        명칭
                    </th>
                    <th class="text-center">
                        시작일자<br/>
                        종료일자
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.name"
                >
                    <td>{{ item.calories }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.name }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
  </v-container>
</template>


<script>

export default {
    name: 'App',

    data: () => ({
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ]
    }),
}
</script>

<style>
@import "../../assets/css/common.css";
</style>