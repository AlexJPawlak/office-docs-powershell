---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpfield
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPField
---

# Get-PnPField

## SYNOPSIS
Returns a field from a list or site

## SYNTAX 

### 
```powershell
Get-PnPField [-Includes <String[]>]
             [-List <ListPipeBind>]
             [-Identity <FieldPipeBind>]
             [-Group <String>]
             [-InSiteHierarchy [<SwitchParameter>]]
             [-Web <WebPipeBind>]
             [-Connection <PnPConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPField
```

Gets all the fields from the current site

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPField -List "Demo list" -Identity "Speakers"
```

Gets the speakers field from the list Demo list

## PARAMETERS

### -Group
Filter to the specified group

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The field object or name to get

```yaml
Type: FieldPipeBind
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: True
```

### -Includes
Specify properties to include when retrieving objects from the server.

```yaml
Type: String[]
Parameter Sets: (All)

Required: False
Position: 0
Accept pipeline input: False
```

### -InSiteHierarchy
Search site hierarchy for fields

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
The list object or name where to get the field from

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: True
```

### -Web
The web to apply the command to. Omit this parameter to use the current web.

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## OUTPUTS

### Microsoft.SharePoint.Client.Field

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)