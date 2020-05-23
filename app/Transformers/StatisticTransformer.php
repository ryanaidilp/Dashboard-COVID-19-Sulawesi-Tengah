<?php

namespace App\Transformers;

use App\District;
use App\Stat;
use Illuminate\Support\Facades\Lang;
use League\Fractal\TransformerAbstract;

class StatisticTransformer extends TransformerAbstract
{
    public function transform(Stat $stats)
    {
        $data = array();
        $histories = $stats->histories;
        foreach ($histories as $key => $history) {
            $district = District::where('no', $history->district_id)->first();
            $total_odp = $history->whereBetween('day', [1, $stats->day])->where('district_id', $district->no)->sum('new_ODP');
            $total_pdp = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('new_PDP');
            $total_finished_odp = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('finished_ODP');
            $total_finished_pdp = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('finished_PDP');
            $total_positive = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('positive');
            $total_recovered = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('recovered');
            $total_death = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('death');
            $total_negative = $history->whereBetween('day', [1, $stats->day])->where('district_id', $history->district_id)->sum('negative');
            $data[$key][Lang::get('general.name')] = $district->kabupaten;
            $data[$key][Lang::get('general.new_case')] = [
                Lang::get('general.positive') => $history->positive,
                Lang::get('general.recovered') => $history->recovered,
                Lang::get('general.death') => $history->death,
                Lang::get('general.negative') => $history->negative,
                Lang::get('general.ODP') => $history->new_ODP,
                Lang::get('general.PDP') => $history->new_PDP,
            ];
            $data[$key][Lang::get('general.active_case')] = [
                Lang::get('general.under_treatment') => $history->under_treatment,
                Lang::get('general.ODP') => $total_odp - $total_finished_odp,
                Lang::get('general.PDP') => $total_pdp - $total_finished_pdp,
            ];
            $data[$key][Lang::get('general.finished_case')] = [
                Lang::get('general.ODP') => $history->finished_ODP,
                Lang::get('general.PDP') => $history->finished_PDP,
            ];
            $data[$key][Lang::get('general.cumulative')] = [
                Lang::get('general.positive') => (int) $total_positive,
                Lang::get('general.recovered') => (int) $total_recovered,
                Lang::get('general.death') => (int) $total_death,
                Lang::get('general.negative') => (int) $total_negative,
                Lang::get('general.ODP') => (int) $total_odp,
                Lang::get('general.PDP') => (int) $total_pdp,
                Lang::get('general.finished_param', ['case' => 'ODP']) => (int) $total_finished_odp,
                Lang::get('general.finished_param', ['case' => 'PDP']) => (int) $total_finished_pdp,
            ];
            $data[$key][Lang::get('general.links')] =
                [Lang::get('general.self') => [
                    Lang::get('general.full') => route('district.index').'/'.$history->district_id,
                    Lang::get('general.endpoint') => 'kabupaten/'.$history->district_id,
                ]];
        }

        return [
            Lang::get('general.day') => $stats->day,
            Lang::get('general.date') => $stats->date,
            Lang::get('general.new_case') => [
                Lang::get('general.positive') => $stats->positive,
                Lang::get('general.recovered') => $stats->recovered,
                Lang::get('general.death') => $stats->death,
                Lang::get('general.negative') => $stats->negative,
                Lang::get('general.ODP') => $stats->new_ODP,
                Lang::get('general.PDP') => $stats->new_PDP,
            ],
            Lang::get('general.active_case') => [
                Lang::get('general.under_treatment') => $stats->under_treatment,
                Lang::get('general.ODP') => $stats->active_ODP,
                Lang::get('general.PDP') => $stats->active_PDP,
            ],
            Lang::get('general.finished_case') => [
                Lang::get('general.ODP') => $stats->finished_ODP,
                Lang::get('general.PDP') => $stats->finished_PDP,
            ],
            Lang::get('general.cumulative') => [
                Lang::get('general.positive') => $stats->cumulative_positive,
                Lang::get('general.recovered') => $stats->cumulative_recovered,
                Lang::get('general.death') => $stats->cumulative_death,
                Lang::get('general.negative') => $stats->cumulative_negative,
                Lang::get('general.ODP') => $stats->cumulative_ODP,
                Lang::get('general.PDP') => $stats->cumulative_PDP,
                Lang::get('general.finished_param', ['case' => 'ODP']) => $stats->cumulative_finished_ODP,
                Lang::get('general.finished_param', ['case' => 'PDP']) => $stats->cumulative_finished_PDP,
            ],
            Lang::get('general.recap') => [
                Lang::get('general.percentage') => [
                    Lang::get('general.death') => $stats->death_percentage,
                    Lang::get('general.recovered') => $stats->recovered_percentage,
                    Lang::get('general.under_treatment') => $stats->under_treatment_percentage,
                ],
                Lang::get('general.average') => [
                    Lang::get('general.positive') => $stats->daily_positive_case,
                    Lang::get('general.recovered') => $stats->daily_recovered_case,
                    Lang::get('general.death') => $stats->daily_death_case,
                ],
            ],
            Lang::get('general.district_list') => $data,
        ];
    }
}
