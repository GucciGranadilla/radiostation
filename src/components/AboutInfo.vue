<template>
  <div class="content">
    <p>About</p>
    <p>&#8665;</p>
    <p>&#8685;</p>
    <p>&#8665;</p>
    <p>&#8685;</p>
  </div>
</template>

<script>


const getArticleInfo = async () => {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const article = {
        title: 'My Vue 3 Article',
        author: 'Kevin Davis'
    }
    
    return article
}
export default {
    async setup() {
        const article = await getArticleInfo()

        return {
            article
        }
    }
}

</script>