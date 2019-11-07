<template>
    <svgicon
            :class="{
              [$options.name]: true,
              [`icon-svg--${size}`]: size,
              [`icon-svg--${color}`]: color,
              'icon-svg--inline': inline,
            }"
            class="icon-svg"
            :name="name"
            :color="originalColor ? '' : color"
            @click.native="$emit('click')"
            :original="originalColor"
    >
    </svgicon>
</template>

<script>
    import "../icons"
    import "@nitro-ui/element-svg-icon";

    export default {
        name: 'NitroIcon',
        props: {
            name: {
                type: String,
                required: true,
            },
            color: {
                color: String,
                default: null
            },
            originalColor: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
            },
        }
    };
</script>

<style>
    .NitroIcon {
        vertical-align: middle;
    }
</style>