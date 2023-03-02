<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
  console.log(store.state);
  store.dispatch("callGetPost");
  console.log(store.commit("renderPost", "salom"));
});
</script>

<template>
  <div class="p-4 shadow-md bg-slate-600">
    <div class="flex justify-between items-center pl-10 pr-4">
      <h1 class="font-bold text-3xl text-white uppercase">Posts</h1>
      <div class="flex w-4/5 justify-between items-center text-white px-3">
        <h1 class="text-cyan-200 text-3xl font-light uppercase">Check</h1>
        <input
          type="text"
          placeholder="Input full url"
          class="p-2 outline-none rounded text-sky-800 w-3/4"
          v-model="$store.state.getAllPosts.url"
          @input="$store.dispatch('callGetPost')"
        />
        <button
          @click="$store.commit('getInputValue')"
          class="rounded px-3 py-2 border border-sky-400 text-sky-400 text-bold focus:ring-2 ring-sky-500"
        >
          GET
        </button>
      </div>
    </div>

    <div
      class="container mx-auto text-white shadow-md m-4 p-4 bg-white rounded-md"
    >
      <div
        v-if="$store.state.getAllPosts.isLoading"
        class="text-sky-500 font-bold text-2xl text-center"
      >
        Loading...
      </div>
      <div
        v-if="$store.state.getAllPosts.allPosts.length"
        class="grid grid-cols-4 gap-4 items-center"
      >
        <div
          v-for="post in $store.state.getAllPosts.allPosts"
          class="text-center w-[300px] min-h-[380px] shadow-md rounded-lg text-white p-2 bg-lime-700 flex flex-col justify-around items-center"
        >
          <!-- <h1 class="text-sky-300 font-bold">{{ post.title }}</h1>
          <p class="text-[14px] font-light text-slate-300">
            {{ post.body }}
          </p> -->
          <!--  -->
          <div v-for="key in Object.keys(post)" class="w-full">
            <div class="flex w-full justify-between items-center">
              <p class="text-red-400 text-[14px]">{{ key }}:</p>
              <p class="text-yellow-500 text-[16px] border border-green-100">
                {{ post[`${key}`] }}
              </p>
            </div>
            <hr />
          </div>
          <!--  -->
        </div>
      </div>
      <div
        class="text-red-600 font-bold text-3xl text-center"
        v-else="$store.state.getAllPosts.allPosts.length"
      >
        {{ $store.state.getAllPosts.errorMessage }}
      </div>
      <p
        v-if="$store.state.getAllPosts.extraMsg.length"
        class="text-red-600 font-light text-[16px] text-center"
      >
        {{ $store.state.getAllPosts.extraMsg }}
      </p>
    </div>
  </div>
</template>

<style></style>
