@extends('layouts.master')

@section('title', 'CV Parsing')

@push('css')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
@endpush

@section('content')
    <div class="container p-4">
        <input type="hidden" value="https://api.affinda.com/static/sample_resumes/example.pdf" id="file-path">
        <div class="row justify-content-center">
            <div class="col-8">
                <form>
                    <div class="mb-3">
                        <label for="upload-cv" class="form-label">Upload your CV</label>
                        <input type="file" class="form-control" id="cv">
                    </div>
                    <button type="button" class="btn btn-primary" id="parsing-file">
                        Parsing
                    </button>
                </form>
            </div>
        </div>

        <div class="row justify-content-center mt-4">
            <div class="col-8">
                <hr>
            </div>
        </div>

        <div class="row justify-content-center mt-1">
            <div class="col-8">
                <p><b>Result after parsing</b></p>

                <div id="result-cv">
                    <table class="table table-bordered">
                        <tbody>
                            {{-- Name --}}
                            <tr>
                                <td width="30%">Name</td>
                                <td class="name clear"></td>
                            </tr>

                            {{-- Profession --}}
                            <tr>
                                <td width="30%">Profession</td>
                                <td class="profession clear"></td>
                            </tr>

                            {{-- Phones --}}
                            <tr>
                                <td width="30%">Phones</td>
                                <td class="phones clear"></td>
                            </tr>

                            {{-- Emails --}}
                            <tr>
                                <td width="30%">Emails</td>
                                <td class="emails clear"></td>
                            </tr>

                            {{-- Date of birth --}}
                            <tr>
                                <td width="30%">Date of birth</td>
                                <td class="date-of-birth clear"></td>
                            </tr>

                            {{-- Location --}}
                            <tr>
                                <td width="30%">Location</td>
                                <td class="location clear"></td>
                            </tr>

                            {{-- Objective --}}
                            <tr>
                                <td width="30%">Objective</td>
                                <td class="objective clear"></td>
                            </tr>

                            {{-- Languages --}}
                            <tr>
                                <td width="30%">Languages</td>
                                <td class="langagues clear"></td>
                            </tr>

                            {{-- Summary --}}
                            <tr>
                                <td width="30%">Summary</td>
                                <td class="summary clear"></td>
                            </tr>

                            {{-- Educations --}}
                            <tr>
                                <td width="30%">Education</td>
                                <td class="educations clear"></td>
                            </tr>

                            {{-- Objective --}}
                            <tr>
                                <td width="30%">Objective</td>
                                <td class="objective clear">
                                </td>
                            </tr>

                            {{-- Languages --}}
                            <tr>
                                <td width="30%">Languages</td>
                                <td class="langagues clear"></td>
                            </tr>

                            {{-- Skills --}}
                            <tr>
                                <td width="30%">Skills</td>
                                <td class="skills clear"></td>
                            </tr>

                            {{-- Work Experience --}}
                            <tr>
                                <td width="30%">Work Experience</td>
                                <td class="experiences clear"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('script')
    <script>
        const AFFINDA_CREDENTIAL = "{{ env('AFFINDA_CREDENTIAL') }}";
    </script>
    <script src="{{ mix('js/home.js') }}"></script>
@endpush