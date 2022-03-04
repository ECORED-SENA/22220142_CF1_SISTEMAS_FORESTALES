<template lang="pug">
.img-infografica
  .img-infografica__img(:ref="'img-ref-'+mainId" @click="selected = 0")
    slot(name="imagen")
  .img-infografica__content(v-if="elements.length")
    .img-infografica__item.px-5.py-2(
        v-for="(item, index) in elements"
        :key="'img-infografica-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @click="selected = item.id"
        :class="{'img-infografica__item--selected' : selected === item.id}"
      )
      h5.mb-0.text-center(v-html="item.titulo") 
    .img-infografica__card(
      v-for="item in elements"
      :key="'img-infografica-card-'+item.id"
      :ref="'card-ref-'+item.id"
      :style="getCardCords(item.id)"
      :class="{'img-infografica__card--selected' : selected === item.id}"
      @mouseover="selected = item.id"
      v-child="item.elm"
    )
    .img-infografica__indicador(
      v-if="firstElement && showIndicator"
      :style="[{top: firstElement.y},{left: firstElement.x}]"
    )
      .indicador--click

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins.js'
export default {
  name: 'ImagenInfograficaC',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getCardCords(cardId) {
      const ref = 'card-ref-' + cardId
      if (!(ref in this.$refs)) {
        return [{ top: 0 }, { left: 0 }]
      }

      const currentCard = this.elements.find(card => card.id === cardId)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      const imgObj = {
        w: imgElement.clientWidth,
        h: imgElement.clientHeight,
      }
      const cardElement = this.$refs[ref][0]
      const cardObj = {
        x: parseInt(currentCard.x, 10),
        y: parseInt(currentCard.y, 10),
        w: cardElement.clientWidth,
        h: cardElement.clientHeight,
      }

      const cardPosY = (cardObj.y / 100) * imgObj.h
      const cardPosX = (cardObj.x / 100) * imgObj.w

      const finalObj = []

      if (cardPosY + cardObj.h > imgObj.h) {
        finalObj.push({ bottom: 0 })
      } else {
        finalObj.push({ top: currentCard.y })
      }

      if (cardPosX + cardObj.w > imgObj.w) {
        finalObj.push({ right: 0 })
      } else {
        finalObj.push({ left: currentCard.x })
      }

      return finalObj
    },
  },
}
</script>

<style lang="sass">
.img-infografica__item
  transition: all 0.3s ease-in-out
  position: absolute
  cursor: pointer
  transform: translate(-50%,-50%)
  background-color: #34bd74
  border-radius: 30px
  width: fit-content
.img-infografica
  &__card
    position: absolute
    width: 300px
    opacity: 0
    pointer-events: none
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out
    transform: translateY(-10px)
    cursor: pointer
    &--selected
      opacity: 1
      transform: translateY(0)
      pointer-events: auto
.img-infografica__item--selected
  background-color: #FF615B
  h5
    color: $white
</style>
