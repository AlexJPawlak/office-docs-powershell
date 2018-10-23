module.exports = {
	GET_TEAM: 'Get-Team',
	INSTALL_MICROSOFT_TEAM: 'Install-Module MicrosoftTeams -SkipPublisherCheck -Force',
	CONNECT_MICROSOFT_TEAM: 'Connect-MicrosoftTeams',
	INSTALL_PLATYPS: 'Install-Module -Name platyPS -SkipPublisherCheck -Scope CurrentUser -Force',
	IMPORT_PLATYPS: 'Import-Module platyPS',
	UPDATE_MARKDOWN: 'Update-MarkdownHelp -Path "{}" -LogPath "{}" -Session $Session',
	SKYPE_SET_POLICY: 'Set-ExecutionPolicy RemoteSigned ',
	SKYPE_INSTALL_MODULE: 'Import-Module "C:\\\\Program Files\\\\Common Files\\\\Skype for Business Online\\\\Modules\\\\SkypeOnlineConnector\\\\SkypeOnlineConnector.psd1" -Force',
	SKYPE_GET_CRED: '$cred = Get-Credential',
	SKYPE_CREATE_SESSION: '$session = New-CsOnlineSession -Credential $cred -Verbose',
	SKYPE_IMPORT_SESSION: 'Import-PSSession -Session $session',
	SHAREPOINT_INSTALL_MODULE: 'Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking',
	WHITEBOARD_INSTALL_MODULE: 'Install-Module -Name WhiteboardAdmin',
	EXCHANGE_INSTALL_MODULE: 'Install-Module -Name ExchangeOnlineShell -Force',
	EXCHANGE_GET_CRED: '$UserCredential = Get-Credential',
	EXCHANGE_GET_SESSION: '$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $UserCredential -Authentication Basic -AllowRedirection',
	EXCHANGE_SESSION_IMPORT: 'Import-PSSession $Session -DisableNameChecking',
	SET_LOGIN: '$Username = \'{}\'',
	SET_PASS: '$Password = \'{}\'',
	CONVERT_PASS_TO_SEC_STRING: '$SecureString = ConvertTo-SecureString -AsPlainText $Password -Force',
	CREAT_CRED: '$cred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username,$SecureString',
	STUFFHUB_INSTALL: 'Install-Module -Name MicrosoftStaffHub -RequiredVersion 1.0.0-alpha -AllowPrerelease'
};
