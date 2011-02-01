<?php
/*
Plugin Name: Empty Paragraph in TinyMCE editor
Plugin URI: http://unhammer.wordpress.com
Description: Adds a button to the TinyMCE editor that adds an empty paragraph that won't get deleted.
Author: Kevin Brubeck Unhammer
Version: 0.9.0
Author URI: http://unhammer.wordpress.com
*/

add_filter('mce_external_plugins', "emptyp_register");
add_filter('mce_buttons', 'emptyp_add_button', 0);

function emptyp_add_button($buttons)
{
    array_push($buttons, "separator", "emptyp");
    return $buttons;
}

function emptyp_register($plugin_array)
{
    $url = trim(get_bloginfo('url'), "/")."/wp-content/plugins/empty-paragraph-for-tinymce-editor/editor_plugin.js";

    $plugin_array['emptyp'] = $url;
    return $plugin_array;
}

