<template>
    <svgicon
            :class="{
      [$options.name]: true,
      [`${$options.name}--${size}`]: size,
    }"
            :name="name"
            :color="color">
    </svgicon>
</template>

<script>
    import "../icons"
    export default {
        name: 'NitroIcon',
        props: {
            name: {
                type: String,
                required: true,
            },
            color: {
                color: String,
                default: '',
                required: false
            },
            size: {
                type: String,
            },
        }
    };
</script>

<style>
    .NitroIcon {
        display: inline-block;
        height: 1em;
        color: inherit;
        vertical-align: middle;
        fill: none;
        stroke: currentColor;
    }

    .NitroIcon--fill {
        fill: currentColor;
        stroke: none;
    }

    .NitroIcon--xs {
        height: 1em;
    }

    .NitroIcon--s {
        height: 1em;
    }

    .NitroIcon--m {
        height: 2em;
    }

    .NitroIcon--l {
        height: 3em;
    }

    .NitroIcon--xl {
        height: 5em;
    }
</style>