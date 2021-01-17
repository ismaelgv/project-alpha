{{/*
Project name including Release name
*/}}
{{- define "project-alpha.name" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 }}
{{- end  -}}

{{/*
Chart complete name with version
*/}}
{{- define "project-alpha.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | trunc 63 }}
{{- end  -}}

{{/*
Common Labels
*/}}
{{- define "project-alpha.labels" -}}
{{ include "project-alpha.selectorLabels" . }}
app.kubernetes.io/component: {{ .Chart.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ include "project-alpha.chart" . }}
{{- end -}}

{{/*
Selector labels
*/}}
{{- define "project-alpha.selectorLabels" -}}
app.kubernetes.io/name: {{ include "project-alpha.name" . | trunc 63 }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}
