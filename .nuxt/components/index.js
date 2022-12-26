export { default as CommentsLoop } from '../../components/CommentsLoop.vue'
export { default as DeleteComment } from '../../components/DeleteComment.vue'
export { default as EditComment } from '../../components/EditComment.vue'
export { default as HeaderElement } from '../../components/HeaderElement.vue'
export { default as LoginComponent } from '../../components/LoginComponent.vue'
export { default as PostElement } from '../../components/PostElement.vue'
export { default as UserComment } from '../../components/UserComment.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
