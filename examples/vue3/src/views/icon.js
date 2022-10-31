import SVGInjectInstance from "@iconfu/svg-inject";
import { h, defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "Icon",
  props: {
    src: {
      required: true,
      type: String,
    },
  },
  setup(props, context) {
    console.log(props);
    const IconNode = ref();
    const icon = computed(() => props.src);
    if (icon.value === "none" || !icon.value) {
      IconNode.value = null;
    } else {
      const { ...attrs } = context.attrs;
      IconNode.value = h("i", { ...attrs, class: "anticon" }, [
        h("img", {
          style: "width: 1em;height: 1em;fill: currentColor;",
          src: icon.value,
          onload: (e) => {
            SVGInjectInstance(e.target, {
              copyAttributes: false,
            });
          },
        }),
      ]);
    }
    return {
      IconNode,
    };
  },
  render() {
    return this.IconNode;
  },
});
