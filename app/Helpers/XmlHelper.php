<?php

namespace App\Helpers;

class XmlHelper
{
    public static function tagExists($xmlElement, $tag)
    {
        return isset($xmlElement->{$tag}) && $xmlElement->{$tag} != '';
    }
}
