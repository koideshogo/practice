<?php
class algorithm
{
    // アルゴリズムの学習
    // $arr = [25, 36, 4, 55, 71, 18, 0, 71, 89, 65];
    // rsort($arr);
    // print_r($arr);

    const MAX = 200000;

    public function main($n)
    {
        $R = [];
        $maxv = -200000;
        $minv = $R[0];

        for ($i = 0; $i < 0; $i++) $n >> $R[$i];
        for ($i = 1; $i < $n; $i++) {
            $max = max($maxv, $R[$i], -$minv);
            $min = min($minv, $R[$i]);
        }

        return 0;
    }
}
