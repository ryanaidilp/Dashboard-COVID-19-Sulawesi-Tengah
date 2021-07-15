<?php

namespace App\Models;

use App\Models\Regency;
use App\Models\NationalCase;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RegencyCase extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $appends = [
        "death_ratio",
        "under_treatment",
        "cumulative_under_treatment",
        "active_person_under_supervision",
        "active_person_under_observation",
    ];

    /**
     * Get the regency that owns the RegencyCase
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function regency(): BelongsTo
    {
        return $this->belongsTo(Regency::class, "regency_id", "id");
    }

    /**
     * Get the national_case that owns the RegencyCase
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function national_case(): BelongsTo
    {
        return $this->belongsTo(NationalCase::class, "day", "id");
    }

    // Accessors & Mutators
    public function getDeathRatioAttribute()
    {
        return ($this->positive > 0) ?
            \percentageValue($this->positive, $this->deceased) : 0;
    }

    public function getUnderTreatmentAttribute()
    {
        return $this->positive - ($this->recovered + $this->deceased);
    }

    public function getCumulativeUnderTreatmentAttribute()
    {
        return $this->cumulative_positive - ($this->cumulative_recovered + $this->cumulative_deceased);
    }

    public function getActivePersonUnderSupervisionAttribute()
    {
        return $this->cumulative_person_under_supervision - $this->cumulative_finished_person_under_supervision;
    }

    public function getActivePersonUnderObservationAttribute()
    {
        return $this->cumulative_person_under_observation - $this->cumulative_finished_person_under_observation;
    }
}
